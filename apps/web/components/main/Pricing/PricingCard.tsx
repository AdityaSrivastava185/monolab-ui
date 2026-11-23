"use client";

import type { ReactNode } from "react";

export interface PricingFeature {
    icon: ReactNode;
    text: string;
}

export interface PricingCardData {
    id: string;
    title: string;
    description: string;
    price: string;
    pricePeriod?: string;
    icon: ReactNode;
    features: PricingFeature[];
    isPopular?: boolean;
    popularLabel?: string;
    popularIcon?: ReactNode;
    comingSoon?: boolean;
    buttonText: string;
    buttonIcon?: ReactNode;
    onButtonClick?: () => void;
}

export interface PricingCardProps {
    data: PricingCardData;
}

export function PricingCard({ data }: PricingCardProps) {
    const {
        title,
        description,
        price,
        pricePeriod = "/mo",
        icon,
        features,
        isPopular = false,
        popularLabel = "Popular",
        popularIcon,
        comingSoon = false,
        buttonText,
        buttonIcon,
        onButtonClick,
    } = data;

    return (
        <article className="flex h-full min-w-0 flex-col">
            {/* Popular banner */}
            {isPopular ? (
                <div className="flex h-12 w-full shrink-0 items-center bg-primary">
                    <div className="flex w-full items-center justify-between px-5 sm:px-6">
                        <p className="text-base font-medium text-foreground sm:text-lg">{popularLabel}</p>
                        {popularIcon}
                    </div>
                </div>
            ) : (
                <div className="h-12 shrink-0" />
            )}

            {/* Main card */}
            <div className={`flex flex-1 flex-col border border-brand-gray-darker ${isPopular? "bg-brand-gray-darker/20" : "bg-transparent"}`}>
                <div className="flex flex-1 flex-col px-5 py-7 sm:px-6 sm:py-8 lg:px-7">
                    {/* Header */}
                    <div className="min-w-0">
                        <div className="flex min-w-0 flex-wrap items-center gap-3 sm:gap-4">
                            <span className={`flex h-12 w-12 shrink-0 items-center justify-center [&>svg]:h-6 [&>svg]:w-6 ${isPopular ? "bg-primary text-white" : "bg-brand-gray-dark text-foreground"}`}>{icon}</span>

                            <p className="text-2xl font-medium tracking-tight sm:text-3xl">{title}</p>
                        </div>
                        <p className="min-h-24 pt-6 text-lg sm:min-h-28 sm:pt-8">{description}</p>
                    </div>

                    {/* Price */}
                    <div className="min-h-24">
                        <p className="break-words text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                            {price}
                            <span className="text-2xl font-normal text-brand-gray-light sm:text-2xl">{pricePeriod}</span>
                        </p>
                    </div>

                    {/* Features */}
                    <div className="pt-8 sm:pt-12">
                        <div className="flex flex-col justify-start gap-2">
                            {features.map((feature, index) => (
                                <div
                                    key={`${feature.text}-${index}`}
                                    className="flex flex-row items-start gap-3 text-base leading-relaxed sm:text-md"
                                >
                                    <span className="shrink-0">{feature.icon}</span>
                                    <p>{feature.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom button */}
                <div className="mt-auto border-t border-brand-gray-darker p-4 sm:p-5">
                    <button
                        onClick={onButtonClick}
                        className={`flex w-full items-center justify-between gap-3 rounded-lg bg-foreground px-5 py-3 text-left text-lg font-medium text-background transition-colors hover:bg-white sm:px-6 ${comingSoon ? "cursor-not-allowed" : "cursor-pointer"}`}
                    >
                        {buttonText}
                        {buttonIcon ?? (
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 17 5-5-5-5" />
                                <path d="m13 17 5-5-5-5" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </article>
    );
}

export default PricingCard;
