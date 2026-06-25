// services/api.js

import axios from "axios";

export default axios.create({

    baseURL:"https://creator-flow-ai-kappa.vercel.app/api"
});