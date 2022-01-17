import React from 'react'
import { useTranslation } from 'react-i18next'

import { Link } from 'react-router-dom'
import { dateToString } from '../../../utils/dateToString'
import { htmlToPlain } from '../../../utils/htmlToPlain'

const NoteCard = ({note}) => {
  const {t} = useTranslation()
  const isOwnNote = note.userId === '619032cad8df581c4881d9a2'
  const summary = htmlToPlain(note.content).slice(note.title.length, note.title.length + 130) + '...'

  return (
    <Link to={`/public/${note._id}`}
          className={'note-card' + (isOwnNote ? ' own-note' : '')}>

      {isOwnNote &&
      <span className="own-note__label">
          {t('MY_NOTE')}
        </span>}

        <p className="note-card__title">
          {note.title}
        </p>

        <p className="note-card__text">
          {summary}
        </p>

        <h6 className="note-card__name">
          {note.username}
        </h6>

        <p className="note-card__date">
          {dateToString(note.updatedAt)}
        </p>
    </Link>
  )
}

export default NoteCard
