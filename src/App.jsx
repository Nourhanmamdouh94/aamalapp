// Hosts the existing A'amal prototype (public/aamal/index.html) at its design size.
// To use the Arabic version, change the file name below to "index-ar.html".
export default function App() {
  return (
    <iframe
      className="frame"
      title="A'amal prototype"
      src={`${import.meta.env.BASE_URL}aamal/index.html`}
    />
  )
}
