import { Link, useParams } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
import { useSelector } from 'react-redux';
import { selectQuizzes } from './quizzesSlice.js';
import { selectCards } from '../cards/cardsSlice.js';

export default function Topic() {
  const quizzes = useSelector(selectQuizzes);
  const cards = useSelector(selectCards);
  let { quizId } = useParams();
  const quiz = quizzes[quizId];

  return (
    <section>
      <h1>{quiz.name}</h1>
      <ul className="cards-list">
        {quiz.cardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
