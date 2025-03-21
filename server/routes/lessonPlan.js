import { Router } from "express";
import generateLessonPlan from "../utils/generateLessonPlan.js";

const router = Router();

router.post("/create" , async (req,res)=>{
    const {subject , topic , grade} = req.body;

    const plan = await generateLessonPlan(subject, topic, grade);

    // const lessonPlan = await LessonPlan.create({subject, topic, grade})
    return res.json({plan, status:true})

})

export default router
