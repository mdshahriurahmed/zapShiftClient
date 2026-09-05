import { RiArrowRightUpLine } from "react-icons/ri";

const FAQ = () => {
    return (
        <section className="w-full bg-base-100 px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-12">

            {/* Heading */}
            <div className="mb-6 w-full text-center sm:mb-7">
                <h2 className="text-2xl font-bold text-secondary sm:text-3xl lg:text-[32px]">
                    Frequently Asked Question (FAQ)
                </h2>

                <p className="mx-auto mt-2 max-w-[560px] text-xs leading-5 text-secondary/60 sm:text-sm">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                    Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>
            </div>

            {/* FAQ 01 - Open by Default */}
            <div className="collapse-arrow collapse mb-2.5 w-full rounded-lg border border-base-200 bg-neutral sm:mb-3">
                <input type="radio" name="faq" defaultChecked />

                <div className="collapse-title min-h-[52px] px-4 py-3 text-xs font-semibold text-secondary sm:min-h-[54px] sm:px-5 sm:text-sm">
                    How does this posture corrector work?
                </div>

                <div className="collapse-content px-4 text-xs leading-5 text-secondary/65 sm:px-5 sm:text-sm sm:leading-6">
                    <div className="border-t border-base-200 pt-3">
                        A posture corrector works by providing support and gentle alignment
                        to your shoulders, back, and spine, encouraging you to maintain
                        proper posture throughout the day. Here’s how it typically
                        functions: A posture corrector works by providing support and
                        gentle alignment to your shoulders.
                    </div>
                </div>
            </div>

            {/* FAQ 02 */}
            <div className="collapse-arrow collapse mb-2.5 w-full rounded-lg border border-transparent bg-neutral sm:mb-3">
                <input type="radio" name="faq" />

                <div className="collapse-title min-h-[52px] px-4 py-3 text-xs font-semibold text-secondary sm:min-h-[54px] sm:px-5 sm:text-sm">
                    Is it suitable for all ages and body types?
                </div>

                <div className="collapse-content px-4 text-xs leading-5 text-secondary/65 sm:px-5 sm:text-sm sm:leading-6">
                    <div className="border-t border-base-200 pt-3">
                        Yes, the posture corrector is designed to accommodate different
                        body types and can be adjusted for a comfortable fit.
                    </div>
                </div>
            </div>

            {/* FAQ 03 */}
            <div className="collapse-arrow collapse mb-2.5 w-full rounded-lg border border-transparent bg-neutral sm:mb-3">
                <input type="radio" name="faq" />

                <div className="collapse-title min-h-[52px] px-4 py-3 text-xs font-semibold text-secondary sm:min-h-[54px] sm:px-5 sm:text-sm">
                    Does it really help with back pain and posture improvement?
                </div>

                <div className="collapse-content px-4 text-xs leading-5 text-secondary/65 sm:px-5 sm:text-sm sm:leading-6">
                    <div className="border-t border-base-200 pt-3">
                        It can help encourage better posture by providing gentle support
                        and reminding you to maintain proper alignment throughout the day.
                    </div>
                </div>
            </div>

            {/* FAQ 04 */}
            <div className="collapse-arrow collapse mb-2.5 w-full rounded-lg border border-transparent bg-neutral sm:mb-3">
                <input type="radio" name="faq" />

                <div className="collapse-title min-h-[52px] px-4 py-3 text-xs font-semibold text-secondary sm:min-h-[54px] sm:px-5 sm:text-sm">
                    Does it have smart features like vibration alerts?
                </div>

                <div className="collapse-content px-4 text-xs leading-5 text-secondary/65 sm:px-5 sm:text-sm sm:leading-6">
                    <div className="border-t border-base-200 pt-3">
                        Yes, selected models can include smart vibration alerts that
                        remind you when your posture needs adjustment.
                    </div>
                </div>
            </div>

            {/* FAQ 05 */}
            <div className="collapse-arrow collapse w-full rounded-lg border border-transparent bg-neutral">
                <input type="radio" name="faq" />

                <div className="collapse-title min-h-[52px] px-4 py-3 text-xs font-semibold text-secondary sm:min-h-[54px] sm:px-5 sm:text-sm">
                    How will I be notified when the product is back in stock?
                </div>

                <div className="collapse-content px-4 text-xs leading-5 text-secondary/65 sm:px-5 sm:text-sm sm:leading-6">
                    <div className="border-t border-base-200 pt-3">
                        You can subscribe to our stock notifications and receive an
                        alert when the product becomes available again.
                    </div>
                </div>
            </div>

            {/* See More FAQ's */}
            <div className="mt-6 flex justify-center gap-2">
                <button type="button" className="flex h-10 items-center rounded-lg bg-primary px-5 text-xs font-semibold text-secondary sm:text-sm">
                    See More FAQ&apos;s
                </button>

                <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-lg text-primary">
                    <RiArrowRightUpLine />
                </button>
            </div>

        </section>
    );
};

export default FAQ;