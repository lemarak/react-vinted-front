import axios from "axios";

import { useState } from "react";
import { useHistory } from "react-router-dom";

const Publish = ({ userToken }) => {
  const history = useHistory();

  const [picture, setPicture] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [isUpload, setIsUpload] = useState(true);

  //   Form validation
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("city", city);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);
    formData.append("picture", picture);

    try {
      console.log(formData);
      console.log("picture", picture);
      console.log("userToken", userToken);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.status);

      if (response.status === 200) {
        setIsUpload(true);
        history.push("/offer/${response.data._id}");
      }
    } catch (error) {
      setIsUpload(false);
      if (error.response.status === 500) {
        console.error("An error occurred");
      } else {
        console.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="publish-container">
      <div className="publish">
        <h2>Vends ton article</h2>
        <form onSubmit={handleSubmit}>
          <div className="publish-file">
            <div className="box-dashed">
              <div className="input-publish-file">
                <label htmlFor="file" class="label-file">
                  <span className="input-sign">+</span>
                  <span>Ajoute une photo</span>
                  <input
                    id="file"
                    type="file"
                    class="input-file"
                    onChange={(event) => {
                      setPicture(event.target.files[0]);
                    }}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Titre et description */}
          <div className="text-input-section">
            <div className="text-input">
              <h4>Titre</h4>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="ex: Chemise Sézane verte"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Décris ton article</h4>
              <textarea
                name="description"
                id="description"
                rows="5"
                placeholder="ex: porté quelquefois, taille correctement"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              ></textarea>
            </div>
          </div>

          {/* Détails */}
          <div class="text-input-section">
            <div class="text-input">
              <h4>Marque</h4>
              <input
                type="text"
                id="selectedBrand"
                name="selectedBrand"
                placeholder="ex: Zara"
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
              />
            </div>
            <div class="text-input">
              <h4>Taille</h4>
              <input
                type="text"
                id="selectedSize"
                name="selectedSize"
                placeholder="ex: L / 40 / 12"
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              />
            </div>
            <div class="text-input">
              <h4>Couleur</h4>
              <input
                type="text"
                id="color"
                name="color"
                placeholder="ex: Fushia"
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              />
            </div>
            <div class="text-input">
              <h4>Etat</h4>
              <input
                name="wearRate"
                id="wearRate"
                placeholder="Neuf avec étiquette"
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
              />
            </div>
            <div class="text-input">
              <h4>Lieu</h4>
              <input
                name="city"
                id="city"
                placeholder="ex: Paris"
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
            </div>
          </div>

          {/* Price */}
          <div class="text-input-section">
            <div class="text-input">
              <h4>Prix</h4>
              <div class="checkbox-section">
                <input
                  type="text"
                  id="price"
                  name="price"
                  placeholder="0,00 €"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                />
                <div class="checkbox-input">
                  <label for="exchange" class="checkbox-design"></label>
                  <input
                    type="checkbox"
                    name="exchange"
                    id="exchange"
                    value="exchange"
                  />
                  <span>Je suis intéressé(e) par les échanges</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div class="form-button-div">
            <button type="submit" class="form-validation">
              Ajouter
            </button>
          </div>
          {!isUpload && (
            <span className="signup-login-error-message">
              Une ereur est survenue.
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Publish;
