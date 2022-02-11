import React from "react";
import MediatekaTwoLeft from "../../assets/images/mediatekaTwoLeft.png";
import MediatekaTwoRight1 from "../../assets/images/mediatekaTwoRight1.png";
import MediatekaTwoRight2 from "../../assets/images/mediatekaTwoRight2.png";
import MediatekaTwoRight3 from "../../assets/images/mediatekaTwoRight3.png";
import MediatekaTwoBottom1 from "../../assets/images/mediatekaTwoBottom1.png";
import MediatekaTwoBottom2 from "../../assets/images/mediatekaTwoBottom2.png";
import MediatekaTwoBottom3 from "../../assets/images/mediatekaTwoBottom3.png";
import MediatekaTwoBottom4 from "../../assets/images/mediatekaTwoBottom4.png";
import "./style.scss";
export default function MediatekaTwo() {
  const mediatekaTwoData = [
    {
      id: 1,
      title:
        "“Ishga marhamat” monomarkazlarida turkiyalik mutaxassislar faoliyat olib bormoqda",
      img: MediatekaTwoLeft,
    },
    {
      id: 2,
      title:
        "“Ishga marhamat” monomarkazlarida turkiyalik mutaxassislar faoliyat olib bormoqda",
      img: MediatekaTwoRight1,
    },

    {
      id: 3,
      title:
        "“Ishga marhamat” monomarkazlarida turkiyalik mutaxassislar faoliyat olib bormoqda",
      img: MediatekaTwoRight2,
    },
    {
      id: 4,
      title:
        "“Ishga marhamat” monomarkazlarida turkiyalik mutaxassislar faoliyat olib bormoqda",
      img: MediatekaTwoRight3,
    },
    {
      id: 5,
      title:
        "“Ishga marhamat” monomarkazlarida turkiyalik mutaxassislar faoliyat olib bormoqda",
      img: MediatekaTwoBottom1,
    },
    {
      id: 6,
      title:
        "“Ishga marhamat” monomarkazlarida turkiyalik mutaxassislar faoliyat olib bormoqda",
      img: MediatekaTwoBottom2,
    },
    {
      id: 7,
      title:
        "“Ishga marhamat” monomarkazlarida turkiyalik mutaxassislar faoliyat olib bormoqda",
      img: MediatekaTwoBottom3,
    },
    {
      id: 8,
      title:
        "“Ishga marhamat” monomarkazlarida turkiyalik mutaxassislar faoliyat olib bormoqda",
      img: MediatekaTwoBottom4,
    },
  ];

  return (
    <div className="mediatekaTwo container">
      <div className="mediatekaTwo__inner">
        {mediatekaTwoData.map((item, id) => (
          <div className="mediatekaTwo__card" key={id}>
            <img src={item.img} alt="" />

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
