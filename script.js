


const medicalTerms = [
    { term: "Acne", definition: "A skin condition that causes pimples, blackheads, and cysts due to clogged hair follicles.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Allergies", definition: "Reactions of the immune system to substances like pollen, dust, or certain foods.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Alzheimer's", definition: "A progressive disease that causes memory loss and cognitive decline.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Anaphylaxis", definition: "A severe, life-threatening allergic reaction that can cause difficulty breathing and swelling.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Ankle Sprain", definition: "Injury to the ligaments in the ankle caused by stretching or tearing.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Anorexia Nervosa", definition: "An eating disorder characterized by an intense fear of gaining weight and extreme food restriction.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Anxiety", definition: "A feeling of worry, nervousness, or unease, often about something with an uncertain outcome.", video: "https://youtube.com/embed/SUb_0S6MSfY?feature=share" },
    { term: "Appendicitis", definition: "Inflammation of the appendix, usually causing pain in the lower right abdomen.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Arrhythmia", definition: "Irregular or abnormal heartbeats.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Arthritis", definition: "Inflammation of the joints, causing pain and stiffness.", video: "https://youtube.com/embed/gaVYociS9qo?feature=share" },
    { term: "Asthma", definition: "A chronic condition that affects the airways, causing difficulty breathing, wheezing, and coughing.", video: "https://youtube.com/embed/1Q1rQrs9QAM?feature=share" },
    { term: "Atopic Eczema", definition: "A type of eczema that causes itchy, inflamed skin.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Attention Deficit Hyperactivity Disorder (ADHD)", definition: "A disorder characterized by inattention, hyperactivity, and impulsiveness.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Autism", definition: "A developmental disorder affecting communication and social interaction.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Bipolar Disorder", definition: "A mental health condition characterized by extreme mood swings, including mania and depression.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Blood Poisoning", definition: "A life-threatening infection in the bloodstream, also known as sepsis.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Bronchiectasis", definition: "A lung condition where the airways become damaged and widened, causing mucus buildup and infection.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Bronchitis", definition: "Inflammation of the bronchial tubes, leading to coughing and mucus production.", video: "https://youtube.com/embed/0-dzTMQosWw?feature=share" },
    { term: "Carpal Tunnel Syndrome", definition: "A condition caused by pressure on the median nerve in the wrist, leading to pain and numbness in the hand.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Celiac Disease", definition: "An autoimmune disorder where ingestion of gluten damages the small intestine.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Chest Pain", definition: "Discomfort or pain felt in the chest, which may indicate heart problems or other conditions.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Chronic Fatigue Syndrome", definition: "A disorder characterized by persistent, unexplained fatigue that doesn't improve with rest.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Chronic Kidney Disease", definition: "A condition where the kidneys gradually lose their function over time.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Cold Sore", definition: "Painful blisters on the lips or around the mouth caused by a viral infection.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Common Cold", definition: "A viral infection of the upper respiratory system, causing symptoms like a runny nose and sore throat.", video: "https://youtube.com/embed/LKXibBHJ8ZU?feature=share" },
    { term: "Coma", definition: "A state of deep unconsciousness where a person cannot be awakened.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Concussion", definition: "A mild traumatic brain injury caused by a blow to the head or body.", video: "https://youtube.com/embed/mwzgxXSV__A?feature=share" },
    { term: "Constipation", definition: "Difficulty in passing stool or infrequent bowel movements.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "COVID-19", definition: "A respiratory illness caused by the SARS-CoV-2 virus, leading to symptoms like fever, cough, and shortness of breath.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Dehydration", definition: "A condition where the body doesn't have enough water to carry out normal functions.", video: "https://youtube.com/embed/tPhKEANIXlc?feature=share" },
    { term: "Delirium", definition: "A sudden, severe confusion and changes in mental status, often caused by illness or medication.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Depression", definition: "A mental health disorder marked by persistent feelings of sadness, loss of interest, and hopelessness.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Diabetes", definition: "A condition where the body can't regulate blood sugar properly, either due to insufficient insulin or poor insulin response.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Diarrhea", definition: "Frequent, loose, or watery stools.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Dizziness", definition: "A feeling of lightheadedness or vertigo, often related to balance issues or low blood pressure.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Down Syndrome", definition: "A genetic disorder causing developmental and intellectual delays, characterized by an extra chromosome 21.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Dry Mouth", definition: "A condition where there is insufficient saliva in the mouth, causing discomfort.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Dysphagia", definition: "Difficulty or discomfort in swallowing food or liquids.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Epilepsy", definition: "A neurological disorder that causes recurrent seizures", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Fever", definition: " An elevated body temperature, often a sign of infection. ", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Flu", definition: "A viral infection that affects the respiratory system, causing fever, chills, and muscle aches.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Fungal Nail Infection", definition: "An infection caused by fungi in the toenails or fingernails, leading to discoloration and thickening.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Food Allergy", definition: "An immune system reaction to certain foods that can cause symptoms ranging from hives to life-threatening anaphylaxis.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Food Poisoning", definition: "Illness caused by eating contaminated food, often leading to vomiting and diarrhea.", video: "https://youtube.com/embed/zniVfCtV2Ns?feature=share" },
    { term: "Gallstones", definition: "Solid particles that form in the gallbladder, which can block bile flow and cause pain.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Gum Disease", definition: "Infection or inflammation of the gums, often due to poor oral hygiene.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Headaches", definition: "Pain or discomfort in the head, often caused by tension, sinus issues, or other conditions.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Heart Attack", definition: "A blockage in a coronary artery that prevents blood flow to the heart, causing damage to the heart muscle.", video: "https://youtube.com/embed/xmbyfCkdbK8?feature=share" },
    { term: "Heart Block", definition: "A condition where the electrical signals in the heart are delayed or blocked, affecting the heart’s rhythm.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Heart Failure", definition: "A condition where the heart can't pump blood efficiently, leading to fluid buildup and other symptoms.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Hepatitis A", definition: "A liver infection caused by the Hepatitis A virus, often spread through contaminated food or water.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "High Blood Pressure", definition: "A condition where the force of blood against the walls of the arteries is too high, potentially causing health problems.", video: " https://youtube.com/embed/Bpy0N8EzEDU?feature=share" },
    { term: "High Cholesterol", definition: "Elevated levels of cholesterol in the blood, which can increase the risk of heart disease.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "HIV", definition: "A virus that attacks the immune system, making it harder for the body to fight infections and diseases.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Hives", definition: "Raised, red, itchy welts on the skin, usually due to an allergic reaction.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Hypothyroidism", definition: "A condition where the thyroid gland doesn’t produce enough thyroid hormone, slowing down body processes.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Indigestion", definition: "Discomfort or pain in the stomach area, often caused by difficulty digesting food.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Infertility", definition: "The inability to conceive a child after trying for a certain period of time.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Ingrown Toenail", definition: "A condition where the edge of a toenail grows into the skin, causing pain and infection.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Insomnia", definition: "Difficulty falling or staying asleep, often leading to tiredness during the day.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Irritable Bowel Syndrome (IBS)", definition: "A digestive disorder that causes abdominal pain, bloating, and changes in bowel movements. ", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Kidney Infection", definition: "An infection in one or both kidneys, often caused by bacteria traveling from the bladder.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Kidney Stones", definition: "Hard deposits of minerals and salts that form inside the kidneys, causing severe pain.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Lactose Intolerance", definition: "The inability to digest lactose, a sugar found in milk and dairy products, leading to digestive issues.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Liver Disease", definition: "A group of conditions affecting the liver, such as hepatitis or cirrhosis, often leading to liver dysfunction.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Low Blood Pressure", definition: "A condition where blood pressure is too low, causing dizziness, fainting, or fatigue.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Lupus", definition: "An autoimmune disease where the body’s immune system attacks its own tissues and organs, causing inflammation.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Malaria", definition: "A mosquito-borne infectious disease caused by parasites that affects the blood and causes fever, chills, and flu-like symptoms.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Malnutrition", definition: "A condition caused by a lack of proper nutrition, either due to insufficient intake or poor absorption of nutrients.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Meningitis", definition: "Inflammation of the protective membranes covering the brain and spinal cord, often caused by infection.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Migraine", definition: "A severe type of headache often accompanied by nausea, vomiting, and sensitivity to light or sound.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Mouth Ulcer", definition: "Painful sores or lesions that appear in the mouth, often caused by injury or infection.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Obesity", definition: "Excess body fat that can lead to health problems, such as heart disease, diabetes, and high blood pressure.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Obsessive Compulsive Disorder (OCD)", definition: "A mental health disorder characterized by obsessive thoughts and repetitive behaviors or rituals.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Obstructive Sleep Apnea", definition: "A sleep disorder where breathing repeatedly stops and starts during sleep due to airway blockages.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Ovarian Cyst", definition: "A fluid-filled sac that forms on the ovary, often causing pain or discomfort.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Parkinson's Disease", definition: "A progressive neurological disorder that affects movement, causing tremors, stiffness, and difficulty with coordination.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Phlegm", definition: "Thick mucus produced by the respiratory system, often during illness or infection.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Polycystic Ovary Syndrome (PCOS)", definition: "A hormonal disorder in women that causes irregular periods, cysts on the ovaries, and other symptoms.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Pneumonia", definition: "An infection in the lungs that causes difficulty breathing, fever, and cough.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Psoriasis", definition: "A chronic skin condition causing red, scaly patches, often on the elbows, knees, and scalp.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Post Traumatic Stress Disorder (PTSD)", definition: "Post-traumatic stress disorder, a mental health condition triggered by experiencing or witnessing a traumatic event.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Ringworm", definition: "A fungal infection that causes a ring-shaped rash on the skin.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Rosacea", definition: "A skin condition causing redness and visible blood vessels on the face, often accompanied by bumps or pimples.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Schizophrenia", definition: "A severe mental disorder that affects thinking, emotions, and behavior, causing hallucinations and delusions.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Shingles", definition: "A painful rash caused by the reactivation of the chickenpox virus.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Skin Cancer Melanoma", definition: "A type of skin cancer that starts in pigment-producing cells (melanocytes) and can spread to other parts of the body.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Stroke", definition: "A medical emergency where the blood supply to part of the brain is interrupted, causing brain cell damage.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Streptococcus", definition: "A bacteria that can cause throat infections, skin infections, and other serious conditions like scarlet fever.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Sore Throat", definition: "Pain, scratchiness, or irritation in the throat, often caused by infection or inflammation.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Swollen Glands", definition: "Enlargement of the lymph nodes, usually due to infection or inflammation.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Tonsillitis", definition: "Inflammation of the tonsils, often caused by a bacterial or viral infection, leading to a sore throat and difficulty swallowing.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Toothache", definition: "Pain in or around a tooth, often due to tooth decay, infection, or injury.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Tooth Decay", definition: "Damage to a tooth caused by bacteria producing acid that erodes the tooth's enamel.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Tourette's Syndrome", definition: "A neurological disorder that causes repetitive, involuntary movements or sounds (tics).", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Type 1 Diabetes", definition: "An autoimmune condition where the body’s immune system attacks insulin-producing cells in the pancreas, leading to high blood sugar levels.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Type 2 Diabetes", definition: "A condition where the body becomes resistant to insulin or doesn’t produce enough, resulting in high blood sugar levels.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Urinary Tract Infection (UTI)", definition: "Infections in the urinary system, often causing pain, burning during urination, and frequent urges to urinate.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Vertigo", definition: "A sensation of spinning or dizziness, often caused by problems with the inner ear or the brain.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },
    { term: "Vitamin D Deficiency", definition: "A condition where the body doesn’t have enough vitamin D, which can lead to weakened bones and immune system issues.", video: "https://www.youtube.com/embed/RlveKVGw0fY?si=p6To9CsJYF7wCI2O" },







   
];

function filterTerms() {
    const searchBox = document.getElementById("searchBox");
    const searchResults = document.getElementById("searchResults");
    const query = searchBox.value.toLowerCase();

    searchResults.innerHTML = "";

    if (query === "") return;

    const filtered = medicalTerms.filter(term => term.term.toLowerCase().startsWith(query));

    filtered.forEach(term => {
        let li = document.createElement("li");
        li.textContent = term.term;
        li.onclick = () => showDefinition(term);
        searchResults.appendChild(li);
    });
}

function showDefinition(term) {
    document.querySelector(".container").style.display = "none";
    document.getElementById("definitionContainer").classList.remove("hidden");

    document.getElementById("termTitle").textContent = term.term;
    document.getElementById("termDefinition").textContent = term.definition;
    document.getElementById("termVideo").src = term.video;
}

function goBack() {
    document.querySelector(".container").style.display = "block";
    document.getElementById("definitionContainer").classList.add("hidden");

    document.getElementById("searchBox").value = "";
    document.getElementById("searchResults").innerHTML = "";
}
