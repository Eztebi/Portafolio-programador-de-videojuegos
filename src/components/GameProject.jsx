
import { FaGithub } from "react-icons/fa";
export default function GameProject({title,description,tool,youtubeId,githubLink}){
    return(
        <div style={{border: "1px solid #ccc", padding: "1rem",marginTop: "1rem"}}>
        <h3>{title}</h3>
        <div style={{ marginBottom: "1rem" }}>
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={`${title} gameplay`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <p>{description}</p>
      <p><strong>Hecho con:</strong> {tool}</p>
      <p>
        <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#0070f3",
            fontWeight: "bold"
          }}>
    <FaGithub size = {20}></FaGithub>
    <span>Github source code</span>
  </a>
</p>
    </div>
  );
}