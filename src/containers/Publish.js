const Publish = () => {
  return (
    <div className="publish-container">
      <div className="publish">
        <h2>Vends ton article</h2>
        <div className="publish-file">
          <div className="box-dashed">
            <div className="input-publish-file">
              <label htmlFor="file" class="label-file">
                <span className="input-sign">+</span>
                <span>Ajoute une photo</span>
                <input id="file" type="file" class="input-file"></input>
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
            />
          </div>
          <div className="text-input">
            <h4>Décris ton article</h4>
            <textarea
              name="description"
              id="description"
              rows="5"
              placeholder="ex: porté quelquefois, taille correctement"
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
            />
          </div>
          <div class="text-input">
            <h4>Taille</h4>
            <input
              type="text"
              id="selectedSize"
              name="selectedSize"
              placeholder="ex: L / 40 / 12"
            />
          </div>
          <div class="text-input">
            <h4>Couleur</h4>
            <input
              type="text"
              id="color"
              name="color"
              placeholder="ex: Fushia"
            />
          </div>
          <div class="text-input">
            <h4>Etat</h4>
            <input
              name="wearRate"
              id="wearRate"
              placeholder="Neuf avec étiquette"
            />
          </div>
          <div class="text-input">
            <h4>Lieu</h4>
            <input name="city" id="city" placeholder="ex: Paris" />
          </div>
        </div>

        {/* Price */}
        <div class="text-input-section">
          <div class="text-input">
            <h4>Prix</h4>
            <div class="checkbox-section">
              <input type="text" id="price" name="price" placeholder="0,00 €" />
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
      </div>
    </div>
  );
};

export default Publish;
