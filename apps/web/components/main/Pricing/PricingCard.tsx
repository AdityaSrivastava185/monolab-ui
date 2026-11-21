
"use client";

import type { ReactNode } from "react";
import Button from "@/components/(utility)/utility/ui/Button";

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
        <div className="h-full flex flex-col">
            {/* Popular banner */}
            {isPopular ? (
                <div className="bg-primary h-9 flex items-center w-full shrink-0">
                    <div className="flex flex-row items-center justify-between w-full px-6">
                        <p className="text-foreground">{popularLabel}</p>
                        {popularIcon}
                    </div>
                </div>
            ) : (
                <div className="bg-transparent h-9 shrink-0" />
            )}

            {/* Main card */}
            <div className="flex flex-col flex-1 gap-7 border border-brand-gray-dark py-4 px-7">

                {/* Header */}
                <div>
                    <div className="flex flex-row gap-3 items-center">
                        {icon}
                        <p className="text-2xl">{title}</p>
                        {comingSoon && (
                            <span className="bg-primary text-foreground text-xs px-2 py-1 rounded-full">
                                Coming Soon
                            </span>
                        )}
                    </div>
                    <p className="pt-4">{description}</p>
                </div>

                {/* Price */}
                <div>
                    <p className="text-5xl">
                        {price}
                        <span className="text-brand-gray-light">{pricePeriod}</span>
                    </p>
                </div>

                {/* Flexible spacing */}
                <div className="flex-1 min-h-24" />

                {/* Features */}
                <div>
                    <div className="flex flex-col justify-center gap-3">
                        {features.map((feature, index) => (
                            <div
                                key={`${feature.text}-${index}`}
                                className="flex flex-row items-center gap-3"
                            >
                                {feature.icon}
                                <p>{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom button */}
                <div className="!md:w-full mt-auto">
                    <Button
                        variant="primary"
                        outerBorder={false}
                        onClick={onButtonClick}
                        disabled={comingSoon}
                        icon={buttonIcon}
                        className="!md:w-full"
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PricingCard;
