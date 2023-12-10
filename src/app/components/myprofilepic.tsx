import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

const ProfilePicture: React.FC<Props> = ({ src, alt }) => {
  return (
    <Image
      className="rounded shadow-lg"
      src={src}
      height={550}
      width={300}
      style={{
        maxWidth: "100%",
        maxHeight: "auto",
      }}
      alt={alt}
      priority={true}
    />
  );
};
export default ProfilePicture;
