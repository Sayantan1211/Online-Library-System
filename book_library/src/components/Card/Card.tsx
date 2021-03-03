import { useHistory } from "react-router-dom";
import "./Card.styles.scss";

import EditIcon from '../../assets/images/edit.svg';

interface CardProps {
  url?: string;
  name: string;
  author?: string;
  description?: string;
  count?: string;
  pages?: string;
  id?: string | number;
}

const Card = (props: CardProps) => {
  const { id, url, name, author, description, count, pages } = props;

  const history = useHistory();

  const handleEdit = () => {
    history.push(`/books/edit/${id}`);
  };

  return (
    <div className="card">
      <div className="card__left">
        <div className="card__image-wrap">
          {url && <img src={url} alt="" />}
        </div>
        {count && <div className="card__left__count">In Stock: {count}</div>}
      </div>
      <div className="card__right">
        <div className="card__title">{name}</div>
        {author && <div className="card__subtitle">by {author}</div>}
        {pages && <div className="card__pages">{pages} Pages</div>}
        {description && <div className="card__description">{description}</div>}
      </div>

      <div onClick={handleEdit} className="edit__wrap">
        <img src={EditIcon} alt="" width="20" height="20" />
      </div>
    </div>
  );
};

export default Card;
