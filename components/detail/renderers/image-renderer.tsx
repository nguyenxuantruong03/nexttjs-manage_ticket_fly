import Image from "next/image";

export function ImageRenderer({ value }: { value: any }) {
  const images = Array.isArray(value) ? value : [value];

  return (
    <div
      className="
grid
grid-cols-3
gap-3
"
    >
      {images.map((img, i) => {
        const url = typeof img === "string" ? img : img.url;

        return (
          <a href={url} target="_blank" key={i}>
            <Image
              src={url}
              width={120}
              height={120}
              alt="image"
              className="
rounded-xl
object-cover
"
            />
          </a>
        );
      })}
    </div>
  );
}
