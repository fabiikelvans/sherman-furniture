import { createSlice } from "@reduxjs/toolkit";
import {RootState} from "../store";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isAffinityModalOpen: false,
        isLampModalOpen: false,
        isVaseModalOpen: false,
        isCarpetModalOpen: false,

    },
    reducers: {
        toggleAffinityModal: (state) => {
            state.isAffinityModalOpen = !state.isAffinityModalOpen;
        },
        toggleLampModal: (state) => {
            state.isLampModalOpen = !state.isLampModalOpen;
        },
        toggleVaseModal: (state) => {
            state.isVaseModalOpen = !state.isVaseModalOpen;
        },
        toggleCarpetModal: (state) => {
            state.isCarpetModalOpen = !state.isCarpetModalOpen;
        }
    }
});

export const { toggleAffinityModal, toggleLampModal, toggleVaseModal, toggleCarpetModal } = modalSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
//useSelector((state) => state.openAffinityModal.isAffinityModalOpen)
export const modalOpen = (state: RootState) =>
    state.modal.isAffinityModalOpen;

export const modalLampOpen = (state: RootState) =>
    state.modal.isLampModalOpen;

export const modalVaseOpen = (state: RootState) =>
    state.modal.isVaseModalOpen;


export const modalCarpetOpen = (state: RootState) =>
    state.modal.isCarpetModalOpen;

export default modalSlice.reducer;