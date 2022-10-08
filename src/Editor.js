export default function Editor({
  heading,
  setHeading,
  picture,
  setPicture,
  emails,
  setEmails
}) {
  return (
    <div>
      <div>
        <label htmlFor="titulo">Título: </label>
        <input
          onChange={({ target }) => setHeading(target.value)}
          value={heading}
          id="titulo"
        />
      </div>
      <div>
        <label htmlFor="imagen">Imagen: </label>
        <input
          onChange={({ target }) => setPicture(target.value)}
          value={picture}
          id="imagen"
        />
      </div>
      <div>
        <label htmlFor="emails">Emails: </label>
        <textarea
          onChange={({ target }) =>
            setEmails(target.value.trim().split(/,|\n/))
          }
          value={emails}
          id="emails"
        ></textarea>
      </div>
    </div>
  );
}
