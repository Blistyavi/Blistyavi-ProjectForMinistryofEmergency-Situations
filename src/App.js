import React, { useState } from "react";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import './styles.css';
import fotka from "./135.png"

function App() {
  const [formData, setFormData] = useState({
    regNumber: "",
    date: "",
    place: "",
    officialName: "",
    violatorName: "",
    birthDetails: "",
    languageProficiency: "",
    residence: "",
    phone: "",
    actualAddress: "",
    workPlace: "",
    offensePlace: "",
    offenseDetails: "",
    witnessDetails: "",
    notes: "",
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
              { label: "Регистрационный номер: ", value: formData.regNumber },
              { label: "Дата составления: ", value: formData.date },
              { label: "Место составления: ", value: formData.place },
              { label: "ФИО составителя: ", value: formData.officialName },
              { label: "ФИО нарушителя: ", value: formData.violatorName },
              { label: "Дата и место рождения: ", value: formData.birthDetails },
              { label: "Владение русским языком: ", value: formData.languageProficiency },
              { label: "Адрес проживания: ", value: formData.residence },
              { label: "Телефон: ", value: formData.phone },
              { label: "Фактический адрес: ", value: formData.actualAddress },
              { label: "Место работы: ", value: formData.workPlace },
              { label: "Место нарушения: ", value: formData.offensePlace },
              { label: "Описание нарушения: ", value: formData.offenseDetails },
              { label: "Сведения о свидетелях: ", value: formData.witnessDetails },
              { label: "Особые замечания: ", value: formData.notes },
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
        maxWidth: "800px", // Ограничение ширины для больших экранов
        margin: "0 auto", // Центрирование на экранах
      }}
    >
      <h1 style={{ fontSize: "24px", textAlign: "center" }}>
        Протокол об административном правонарушении
      </h1>
      <img
        className="fotka"
        src={fotka}
        alt=""
        style={{
          maxWidth: "100%", // Изображение занимает ширину контейнера
          height: "auto", // Сохраняет пропорции
          display: "block", // Центрируем изображение
          margin: "0 auto",
        }}
      />
      <form
        className="container"
        style={{
          display: "flex",
          flexDirection: "column", // Вертикальная ориентация элементов
          gap: "15px", // Расстояние между элементами
        }}
      >
        {[
          { label: "Регистрационный номер:", name: "regNumber" },
          { label: "Дата составления:", name: "date", type: "date" },
          { label: "Место составления:", name: "place" },
          { label: "ФИО составителя:", name: "officialName" },
          { label: "ФИО нарушителя:", name: "violatorName" },
          { label: "Дата и место рождения:", name: "birthDetails" },
          { label: "Владение русским языком:", name: "languageProficiency" },
          { label: "Адрес проживания:", name: "residence" },
          { label: "Телефон:", name: "phone" },
          { label: "Фактический адрес:", name: "actualAddress" },
          { label: "Место работы:", name: "workPlace" },
          { label: "Место нарушения:", name: "offensePlace" },
          { label: "Описание нарушения:", name: "offenseDetails", type: "textarea" },
          { label: "Сведения о свидетелях:", name: "witnessDetails", type: "textarea" },
          { label: "Особые замечания:", name: "notes", type: "textarea" },
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
                  height: "60px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "2px",
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
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "8px",
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
          width: "100%", // Кнопка растягивается на всю ширину экрана
          maxWidth: "300px", // Ограничение для больших экранов
          margin: "20px auto 0", // Центрируем кнопку
          display: "block",
        }}
      >
        Сохранить в DOCX
      </button>
    </div>
  );  
}

export default App;
