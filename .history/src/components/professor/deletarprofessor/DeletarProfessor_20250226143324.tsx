

function DeletarProfessor(){


    const [professor, setProfessor] = useState<Professor>({} as Professor);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();
}