import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Professor } from "../../../models/Professor";



function FormProfessor(){
    const navigate = useNavigate();

    const[professor, setProfessor] = useState<Professor>({} as Professor);

    const [isLoading, setIsloading] = useState<boolean>(false)

    const { id } = useParams<{id: string}>();





}