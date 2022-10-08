export default function Preview({ heading, picture, emails }) {
  return (
    <div className="preview">
      <div>
        <h1>{heading}</h1>
      </div>
      <div>
        <img src={picture} alt="" width="300px" />
      </div>
      <div>
        <ol>
          {emails.map((email) => (
            <li>{email}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
