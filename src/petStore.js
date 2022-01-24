import { makeAutoObservable } from "mobx";
import petsData from "./petsData";

class PetStore {
  pets = petsData;

  handleAdopt = (petId) => {
    this.pets = this.pets.filter((pet) => pet.id !== petId);
    console.log(petId);
  };

  constructor() {
    makeAutoObservable(this);
  }
}

const petstore = new PetStore();
export default petstore;
