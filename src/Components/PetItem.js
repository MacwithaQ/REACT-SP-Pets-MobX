import petstore from "../petStore";
import {observer} from "mobx-react";


function PetItem({pet}) {
  return (
    <div class="col-lg-4 col-md-8 col-sm-10">
      <div class="single-doctor">
        <img className="image" alt={pet.name} src={pet.image} />
        <div class="content">
          <h3>{pet.name}</h3>
          <button
            type="button"
            class={"btn btn-info"}
            onClick={petstore.pettingButton}
          >
            Pet
          </button>
          <button
            type="button"
            class="btn btn-info"
            onClick={() => petstore.handleAdopt(pet.id)}
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default observer(PetItem);