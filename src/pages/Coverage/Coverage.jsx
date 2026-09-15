import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap,
} from "react-leaflet";
import { useLoaderData } from "react-router";


// Move map when a service center is selected
const MapMover = ({ district }) => {
    const map = useMap();

    useEffect(() => {
        if (!district) return;

        map.flyTo(
            [district.latitude, district.longitude],
            12,
            {
                duration: 1,
            }
        );
    }, [district, map]);

    return null;
};


const Coverage = () => {
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState(null);

    const serviceCenters = useLoaderData();

    console.log(serviceCenters);


    // Search district, city and covered areas
    const filteredserviceCenters = useMemo(() => {
        const query = String(search ?? "").trim().toLowerCase();

        if (!query) return [];

        return serviceCenters
            .filter((center) => {
                const districtMatch = String(center?.district ?? "")
                    .toLowerCase()
                    .includes(query);

                const cityMatch = String(center?.city ?? "")
                    .toLowerCase()
                    .includes(query);

                const areaMatch = (center?.covered_area ?? []).some(
                    (area) =>
                        String(area).toLowerCase().includes(query)
                );

                return districtMatch || cityMatch || areaMatch;
            })
            .slice(0, 5);
    }, [search, serviceCenters]);


    // Search button / Enter
    const handleSearch = () => {
        const query = String(search ?? "")
            .trim()
            .toLowerCase();

        if (!query) return;

        const result =
            serviceCenters.find(
                (center) =>
                    String(center?.district ?? "")
                        .toLowerCase() === query
            ) ||
            serviceCenters.find(
                (center) =>
                    String(center?.city ?? "")
                        .toLowerCase() === query
            ) ||
            filteredserviceCenters[0];

        if (result) {
            setSelected(result);
            setSearch(result.district);
        }
    };


    // Select suggestion
    const handleSelect = (center) => {
        setSelected(center);
        setSearch(center.district);
    };


    return (
        <section className="w-full rounded-[18px] bg-white px-6 py-8 md:px-[52px] md:py-9">

            {/* Heading */}
            <h2 className="text-[26px] font-extrabold leading-tight text-[#03373D] md:text-[28px]">
                We are available in {serviceCenters.length} service centers
            </h2>


            {/* Search */}
            <div className="relative mt-6 w-full max-w-[280px]">

                <div className="flex h-[34px] overflow-hidden rounded-full bg-[#EAECED]">

                    <div className="flex flex-1 items-center px-3">

                        <Search
                            size={14}
                            className="mr-2 shrink-0 text-[#03373D]"
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setSelected(null);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSearch();
                                }
                            }}
                            placeholder="Search district or area"
                            className="w-full bg-transparent text-[10px] text-[#03373D] outline-none placeholder:text-gray-400"
                        />

                    </div>


                    <button
                        onClick={handleSearch}
                        className="min-w-[63px] rounded-full bg-[#CAEB66] px-4 text-[10px] font-semibold text-[#03373D] transition hover:brightness-95"
                    >
                        Search
                    </button>

                </div>


                {/* Suggestions */}
                {search &&
                    !selected &&
                    filteredserviceCenters.length > 0 && (

                        <div className="absolute left-0 right-0 top-10 z-[1000] overflow-hidden rounded-xl bg-white shadow-lg">

                            {filteredserviceCenters.map((center) => (

                                <button
                                    key={center.district}
                                    onClick={() =>
                                        handleSelect(center)
                                    }
                                    className="block w-full px-4 py-2 text-left text-xs text-[#03373D] hover:bg-[#EAECED]"
                                >

                                    <span className="font-semibold">
                                        {center.district}
                                    </span>

                                    <span className="ml-2 text-[10px] text-gray-400">
                                        {center.region}
                                    </span>

                                </button>

                            ))}

                        </div>
                    )}


                {/* No result */}
                {search &&
                    !selected &&
                    filteredserviceCenters.length === 0 && (

                        <div className="absolute left-0 right-0 top-10 z-[1000] rounded-xl bg-white p-3 text-xs text-gray-500 shadow-lg">
                            No district or area found
                        </div>
                    )}

            </div>


            {/* Selected information */}
            {selected && (
                <div className="mt-4 rounded-xl bg-[#EAECED] px-4 py-3 text-xs text-[#03373D]">

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="font-bold">
                                {selected.district}
                            </p>

                            <p className="mt-1 text-[10px] text-gray-500">
                                {selected.region} • {selected.city}
                            </p>
                        </div>

                        <span className="rounded-full bg-[#CAEB66] px-3 py-1 text-[9px] font-semibold">
                            {selected.status}
                        </span>

                    </div>

                    <p className="mt-2 text-[10px]">
                        <span className="font-semibold">
                            Service Areas:
                        </span>{" "}
                        {selected.covered_area?.join(", ")}
                    </p>

                </div>
            )}


            {/* Divider */}
            <div className="my-6 border-t border-[#e5e7e9]" />


            {/* Subtitle */}
            <h3 className="text-[16px] font-bold text-[#03373D]">
                We deliver almost all over Bangladesh
            </h3>


            {/* Map */}
            <div className="mt-6 h-[500px] w-full overflow-hidden rounded-sm">

                <MapContainer
                    center={[23.685, 90.3563]}
                    zoom={7}
                    scrollWheelZoom={true}
                    className="h-full w-full"
                >

                    <TileLayer
                        attribution="&copy; OpenStreetMap contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />


                    {/* Move map to selected district */}
                    <MapMover district={selected} />


                    {/* All service centers */}
                    {serviceCenters.map((center, index) => (

                        <Marker
                            key={`${center.district}-${index}`}
                            position={[
                                center.latitude,
                                center.longitude,
                            ]}
                        >

                            <Popup>

                                <div className="text-sm">

                                    <strong>
                                        District: {center.district}
                                    </strong>

                                    <br />

                                    <span>
                                        {center.city}
                                    </span>

                                    <br />

                                    <span className="font-semibold">
                                        Service Areas:
                                    </span>

                                    <br />

                                    {center.covered_area?.join(", ")}

                                </div>

                            </Popup>

                        </Marker>

                    ))}

                </MapContainer>

            </div>

        </section>
    );
};

export default Coverage;