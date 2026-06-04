export const ai = (req,res)=>{
 const {goal}=req.body;

 let msg='balanced diet';

 if(goal==='loss') msg='low carb diet';
 if(goal==='gain') msg='high protein diet';

 res.json({msg});
};
