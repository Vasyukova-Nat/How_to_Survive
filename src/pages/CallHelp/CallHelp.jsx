import "../../App.css";
import "./CallHelp.css";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function CallHelp() {
  return (
    <div style={{ display: "block", width: "100%" }}>
      <Breadcrumbs />

      <div style={{ display: "flex", background: "#DEF0F8" }}>
        <h5
          style={{
            fontSize: "36px",
            fontWeight: "500",
            textAlign: "center",
            width: "100%",
          }}
        >
          Как позвать на помощь
        </h5>
      </div>

      <p style={{ textAlign: "center", fontSize: "20px" }}>
        {" "}
        Это страница с номерами телефонов спецслужб. <br /> Здесь вы найдете
        контактные данные различных организаций, которые занимаются обеспечением
        безопасности и защитой граждан. <br /> Будьте готовы к любым ситуациям и
        знайте, что помощь всегда на расстоянии звонка.{" "}
      </p>

      <div style={{ width: "100%", textAlign: "center" }}>
        <img src="/phones.png" alt="F" style={{ height: "500px" }} />
      </div>

      <h4 style={{ paddingLeft: "40px" }}>Важные правила</h4>
      <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
        <li>Не звонить в спецслужбы без крайней необходимости.</li>
        <li>
          Говорить спокойно и четко, сообщая все детали и обстоятельства
          происшествия.
        </li>
        <li>
          Не делать шуток или ложных заявлений, так как это может привести к
          серьезным последствиям.
        </li>
        <li>
          Следовать указаниям оператора спецслужбы и отвечать на задаваемые
          вопросы.
        </li>
        <li>
          Не повторять звонок без необходимости, чтобы не перегружать линии
          спецслужб.
        </li>
        <li>
          Не беспокоить спецслужбы по пустякам или для разговоров на ненужные
          темы.
        </li>
        <li>
          Соблюдать конфиденциальность и не разглашать информацию, полученную от
          спецслужб, <br /> третьим лицам.
        </li>
      </ul>
    </div>
  );
}

export default CallHelp;
