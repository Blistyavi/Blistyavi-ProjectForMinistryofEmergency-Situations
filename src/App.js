import React, { useState } from "react";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import './styles.css';
import fotka from "./135.png"

function App() {
  const [formData, setFormData] = useState({
    location: "",
    actDetails: "",
    incidentDate: "",
    objectName: "",
    objectOwnership: "",
    objectAddress: "",
    fireDetectionTime: "",
    fireDetectionPerson: "",
    fireDetectionPhone: "",
    localizationDateTime: "",
    liquidationDateTime: "",
    fireSituation: "",
    unitsAndParticipants: "",
    mainAndSpecialUnits: "",
    gdzsUnits: "",
    participantsCount: "",
    fireTechType: "",
    hoseCount: "",
    extinguishingAgents: "",
    waterSources: "",
    fireConsequences: "",
    casualties: "",
    injuries: "",
    destroyedObjects: "",
    agricultureProducts: "",
    animalCasualties: "",
    conditionsContributing: "",
    savedOnFire: "",
    actSentTo: "",
    specialNotes: "",
    signer: "",
    copiesReceived: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  

  const saveDocx = () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "Протокол об административном правонарушении",
                  bold: true,
                  size: 28, // Шрифт 14
                }),
              ],
            }),
            ...[
              { label: "Местоположение (город, село, район): ", value: formData.location },
              { label: "Составил акт о пожаре, произошедшем (дата, должность, звание, ФИО): ", value: formData.actDetails },
              { label: "Дата происшествия: ", value: formData.incidentDate },
              { label: "Наименование объекта: ", value: formData.objectName },
              { label: "Принадлежность объекта: ", value: formData.objectOwnership },
              { label: "Адрес объекта: ", value: formData.objectAddress },
              { label: "Время обнаружения пожара ч/м: ", value: formData.fireDetectionTime },
              { label: "Кто обнаружил пожар и каким способом сообщил о нем в пожарную охрану и номер телефона: ", value: formData.fireDetectionPerson },
              { label: "Дата и время локализации пожара: ", value: formData.localizationDateTime },
              { label: "Дата и время ликвидации пожара: ", value: formData.liquidationDateTime },
              { label: "Обстановка пожара: ", value: formData.fireSituation },
              { label: "Подразделения и участники тушения: ", value: formData.unitsAndParticipants },
              { label: "Основные и спец. отделения: ", value: formData.mainAndSpecialUnits },
              { label: "ГДЗС отделения: ", value: formData.gdzsUnits },
              { label: "Число участников тушения: ", value: formData.participantsCount },
              { label: "Тип, количество и принадлежность пожарной техники: ", value: formData.fireTechType },
              { label: "Кол-во и вид поданных стволов: ", value: formData.hoseCount },
              { label: "Огнетушащие вещества: ", value: formData.extinguishingAgents },
              { label: "Водоисточники: ", value: formData.waterSources },
              { label: "Последствия пожара: ", value: formData.fireConsequences },
              { label: "Погибло людей: ", value: formData.casualties },
              { label: "Получили травмы: ", value: formData.injuries },
              { label: "Уничтожено строений и других объектов: ", value: formData.destroyedObjects },
              { label: "С/х культуры: ", value: formData.agricultureProducts },
              { label: "Погибло с/х животных: ", value: formData.animalCasualties },
              { label: "Условия, способствовавшие развитию: ", value: formData.conditionsContributing },
              { label: "Спасено на пожаре: ", value: formData.savedOnFire },
              { label: "Акт направлен в: ", value: formData.actSentTo },
              { label: "Особые замечания: ", value: formData.specialNotes },
              { label: "Подпись составившего: ", value: formData.signer },
              { label: "Экземпляры получили: ", value: formData.copiesReceived },
            ].map((item) =>
              new Paragraph({
                children: [
                  new TextRun({
                    text: item.label + item.value,
                    size: 28, // Шрифт 14
                  }),
                ],
              })
            ),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "Protocol.docx");
    });
  };

  return (
    <div
    style={{
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      maxWidth: "800px",
      width: "100%",
      boxSizing: "border-box",
      margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "24px", textAlign: "center" }}>
        Протокол об административном правонарушении
      </h1>
      <img
        className="fotka"
        src={fotka}
        alt="Фото"
        style={{
          maxWidth: "100%",
          height: "auto",
          display: "block",
          margin: "0 auto",
        }}
      />
      <form
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "100%",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        {[
          { label: "Местоположение (город, село, район): ", value: formData.location },
          { label: "Составил акт о пожаре, произошедшем (дата, должность, звание, ФИО): ", value: formData.actDetails },
          { label: "Дата происшествия: ", value: formData.incidentDate },
          { label: "Наименование объекта: ", value: formData.objectName },
          { label: "Принадлежность объекта: ", value: formData.objectOwnership },
          { label: "Адрес объекта: ", value: formData.objectAddress },
          { label: "Время обнаружения пожара ч/м: ", value: formData.fireDetectionTime },
          { label: "Кто обнаружил пожар и каким способом сообщил о нем в пожарную охрану и номер телефона: ", value: formData.fireDetectionPerson },
          { label: "Дата и время локализации пожара: ", value: formData.localizationDateTime },
          { label: "Дата и время ликвидации пожара: ", value: formData.liquidationDateTime },
          { label: "Обстановка пожара: ", value: formData.fireSituation },
          { label: "Подразделения и участники тушения: ", value: formData.unitsAndParticipants },
          { label: "Основные и спец. отделения: ", value: formData.mainAndSpecialUnits },
          { label: "ГДЗС отделения: ", value: formData.gdzsUnits },
          { label: "Число участников тушения: ", value: formData.participantsCount },
          { label: "Тип, количество и принадлежность пожарной техники: ", value: formData.fireTechType },
          { label: "Кол-во и вид поданных стволов: ", value: formData.hoseCount },
          { label: "Огнетушащие вещества: ", value: formData.extinguishingAgents },
          { label: "Водоисточники: ", value: formData.waterSources },
          { label: "Последствия пожара: ", value: formData.fireConsequences },
          { label: "Погибло людей: ", value: formData.casualties },
          { label: "Получили травмы: ", value: formData.injuries },
          { label: "Уничтожено строений и других объектов: ", value: formData.destroyedObjects },
          { label: "С/х культуры: ", value: formData.agricultureProducts },
          { label: "Погибло с/х животных: ", value: formData.animalCasualties },
          { label: "Условия, способствовавшие развитию: ", value: formData.conditionsContributing },
          { label: "Спасено на пожаре: ", value: formData.savedOnFire },
          { label: "Акт направлен в: ", value: formData.actSentTo },
          { label: "Особые замечания: ", value: formData.specialNotes },
          { label: "Подпись составившего: ", value: formData.signer },
          { label: "Экземпляры получили: ", value: formData.copiesReceived },
        ].map((field, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <label
              className="main"
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              style={{
                width: "100%",
                maxWidth: "100%",
                height: "60px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "8px",
                boxSizing: "border-box",
                }}
              />
            ) : (
              <input
              type={field.type || "text"}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              style={{
                width: "100%",
                maxWidth: "100%",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "8px",
                boxSizing: "border-box",
                }}
              />
            )}
          </div>
        ))}
      </form>
      <button
        onClick={saveDocx}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          width: "100%",
          maxWidth: "300px",
          margin: "20px auto 0",
          display: "block",
        }}
      >
        Сохранить в DOCX
      </button>
    </div>
  );  
}

export default App;
