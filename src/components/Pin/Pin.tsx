/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactComponent as More } from "assets/more.svg";
import { ReactComponent as Share } from "assets/share.svg";
import "./styles.scss";

type PinProps = {
  value: string;
};

function Pin({ value }: PinProps) {
  return (
    <button className="pin">
      <img src={value} alt="" />
      <div className="pin-hover">
        <a href="#" className="save">
          Salvar
        </a>
        <div>
          <a href="#" className="share">
            <Share />
          </a>
          <a href="#" className="more">
            <More />
          </a>
        </div>
      </div>
    </button>
  );
}

export default Pin;
