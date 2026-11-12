import roundOne from "../../../data/round-1.json";
import roundTwo from "../../../data/round-2.json";
import roundThree from "../../../data/round-3.json";
import roundFour from "../../../data/round-4.json";
import roundFive from "../../../data/round-5.json";
import roundSix from "../../../data/round-6.json";
import roundSeven from "../../../data/round-7.json";
import roundEight from "../../../data/round-8.json";

const rounds = [
  roundOne,
  roundTwo,
  roundThree,
  roundFour,
  roundFive,
  roundSix,
  roundSeven,
  roundEight,
];

export default function RoundList() {
  return (
    <ul className="page__list">
      {rounds.map(([{ title }], index) => (
        <li key={index}>
          Round {index + 1} - {title}
        </li>
      ))}
    </ul>
  );
}
