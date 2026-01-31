import Image from "next/image";

interface ExpertCardProps {
    imageSrc: string;
    name: string;
    title: string;
}

export function ExpertCard({ imageSrc, name, title }: ExpertCardProps) {
    return (
        <div className="text-center">
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden mb-2 border border-gold">
                <Image
                    src={imageSrc}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 33vw"
                    className="object-cover"
                />
            </div>
            <p className="font-bold text-sm text-im8-dark-red">{name}</p>
            <p className="text-[10px] text-im8-dark-red/80">{title}</p>
        </div>
    );
}
