import React from 'react'
import Pattern from './Pattern';
import VerticalBorder from './VerticalBorder';
import { patternContainerProps } from '@/types/PatternContainer.type';


const PatternContainer = ({ children }: patternContainerProps) => {
    return (
        <div className="grid h-full grid-cols-[minmax(0,1fr)_9fr_minmax(0,1fr)]">
            <div className="relative">
                <Pattern />
                <div className="absolute inset-y-0 left-0 z-10 w-px">
                    <VerticalBorder />
                </div>
                <div className="absolute inset-y-0 right-0 z-10 w-px">
                    <VerticalBorder />
                </div>
            </div>
            {children}
            <div className="relative">
                <Pattern />

                <div className="absolute inset-y-0 left-0 z-10 w-px">
                    <VerticalBorder />
                </div>

                <div className="absolute inset-y-0 right-0 z-10 w-px">
                    <VerticalBorder />
                </div>
            </div>
        </div>
    )
}

export default PatternContainer
