export default function Phonetic({ phonetic, audio }) {
  return (
    <div className="Phonetic">
      <p className="phonetic">/{phonetic}/</p>
      {audio && (
        <audio controls src={audio}>
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}