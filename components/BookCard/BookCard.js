import Image from "next/image";

export default function BookCard({ title, author, genre, cover }) {
  return (
    <div>
      <Image src={cover} alt={title} width={100} height={149} />
      <ul>
        <li>{title}</li>
        <li>{author}</li>
        <li>{genre}</li>
      </ul>
    </div>
  );
}
