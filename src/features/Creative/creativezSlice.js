import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    creativez: ["DOCS", "Announcements", "Voting", "CTZ Gallery" ]

}

const creativezSlice = createSlice({
    name: "creativez",
    initialState,
    reducers: {}
})

export const selectCreativez = state => state.creativez.creativez

export default creativezSlice.reducer

