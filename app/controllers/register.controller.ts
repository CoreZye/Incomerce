import { Router, Request, Response } from 'express';
import { Registery } from '../models/registery';

const router: Router = Router();

const registries: Registery[] = [
    {
        id: 1,
        categoryId: 10,
        company: 'Stefna Ehf',
        date: new Date(),
        description: 'Laun fyrir mánuðinn',
        isIncome: true,
        isTemplate: false,
        repetitionId: undefined,
        value: 180000
    },
    {
        id: 4,
        categoryId: 10,
        company: 'Stefna Ehf',
        date: new Date(),
        description: 'Laun fyrir mánuðinn',
        isIncome: true,
        isTemplate: false,
        repetitionId: undefined,
        value: 180000
    },
    {
        id: 6,
        categoryId: 2,
        company: 'Bónus',
        date: new Date(),
        description: 'Matur',
        isIncome: false,
        isTemplate: false,
        repetitionId: undefined,
        value: 180000
    },
    {
        id: 7,
        categoryId: 10,
        company: 'Stefna Ehf',
        date: new Date(),
        description: 'Laun fyrir mánuðinn',
        isIncome: true,
        isTemplate: false,
        repetitionId: undefined,
        value: 180000
    }
];

router.get('/', (req: Request, res: Response) => {
    res.send(registries);
});

router.get('/:id', (req: Request, res: Response) => {
    const id: number = req.params.id;

    if (isNaN(id)) {
        res.status(400);
        return res.send({
            message: `'${id}' is not a valid id`,
            code: 400
        });
    }
    const current = registries.filter(x => x.id == id)[0];
    if (current === undefined) {
        res.status(404);
        return res.send({
            message: `no registry found with id: ${id}`,
            code: 404
        });
    }
    res.send(current);
});

export const RegisterController: Router = router;