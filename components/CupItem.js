import React from 'react';
import Link from 'next/link';

const CupItem = ({ cup }) => {
  return (
    <li
      className="mdl-list__item mdl-list__item--two-line"
      style={{ listStyle: 'none' }}
    >
      <span className="mdl-list__item-primary-content">
        <span>{cup.scenario}</span>
        <span className="mdl-list__item-sub-title">{cup.difficulty}</span>
      </span>
      <span className="mdl-list__item-secondary-content">
        <Link href={`/edit-cup?id=${cup.id}`}>
          <a className="mdl-list__item-secondary-action">
            <i className="material-icons">edit</i>
          </a>
        </Link>
        <Link href={`/play?id=${cup.id}`}>
          <a className="mdl-list__item-secondary-action">
            <i className="material-icons">videogame_asset</i>
          </a>
        </Link>
      </span>
    </li>
  );
};

export default CupItem;
