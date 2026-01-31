"use client";

import { useEffect, useRef, useState } from "react";

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number | undefined>(defaultOpen ? undefined : 0);

    useEffect(() => {
        if (isOpen) {
            const contentEl = contentRef.current;
            if (contentEl) {
                setHeight(contentEl.scrollHeight);
            }
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div className="border-t border-im8-dark-red/20">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full py-4 cursor-pointer text-left"
            >
                <h3 className="font-bold text-im8-dark-red text-lg">{title}</h3>
                <span
                    className="text-im8-dark-red text-2xl font-light transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                    +
                </span>
            </button>
            <div
                ref={contentRef}
                style={{ height: height === undefined ? 'auto' : height }}
                className="overflow-hidden transition-all duration-300 ease-out"
            >
                <div className="pb-6">
                    {children}
                </div>
            </div>
        </div>
    );
}
