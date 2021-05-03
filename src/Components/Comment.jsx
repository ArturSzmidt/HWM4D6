import React from 'react';

export default function Comment({ comment: { comment, rate, author } }) {
  console.log(comment);
  return (
    <div className="py-auto">
      <h6>
        {author} gives a book rate of: {rate}
      </h6>

      <p>
        <b>{comment}</b>
      </p>
    </div>
  );
}
