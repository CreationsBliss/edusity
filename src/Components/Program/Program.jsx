import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
import "./Program.css";

const Program = () => {
  return (
    <section className="programs">
      <div className="program">
        <img src={program_1} alt="program_1" />
        <div className="caption">
          <img src={program_icon_1} alt="program_icon_1" />
          <p>Graduation Degreee</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="program_2" />
        <div className="caption">
          <img src={program_icon_2} alt="program_icon_2" />
          <p>Masters Degreee</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="program_3" />
        <div className="caption">
          <img src={program_icon_3} alt="program_icon_3" />
          <p>Post Graduation</p>
        </div>
      </div>
    </section>
  );
};

export default Program;
