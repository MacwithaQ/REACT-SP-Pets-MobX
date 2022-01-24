import { makeAutoObservable } from "mobx";
import petsData from "./petsData";

class PetStore {
  pets = petsData;

  handleAdopt = (petId) => {
    this.pets = this.pets.filter((pet) => pet.id !== petId);
    console.log(petId);
  };

  pettedStatus = false;

  pettingButton = ()=>{
      if(this.pettedStatus){
          this.pettedStatus=false;
      }
      else{
          this.pettedStatus=true;
      }

  }



  constructor() {
    makeAutoObservable(this);
  }
}

const petstore = new PetStore();
export default petstore;
