// /components/AlphabetCard.tsx
import { Link } from "react-router-dom";
// import { CaseBrief } from "../data/caseBriefsData";

type Props = {
  alphabet: string;
  categories: string[];
};

export default function AlphabetCard({ alphabet, categories }: Props) {
  return (
    <div className="alphabet-card">
      <h2>{alphabet}</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <Link to={`/case-briefs/${cat.toLowerCase().replace(/\s+/g, "-")}`}>{cat}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
