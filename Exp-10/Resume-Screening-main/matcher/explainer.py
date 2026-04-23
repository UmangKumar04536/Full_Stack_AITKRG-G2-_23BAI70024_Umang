def generate_explanation(resume_data, jd_data, score):
    resume_skills = set(resume_data["skills"])
    jd_required = set(jd_data["required"])

    matched = resume_skills & jd_required
    missing = jd_required - resume_skills

    explanation = []
    suggestions = []

    # Score interpretation
    if score >= 80:
        explanation.append("The candidate profile strongly aligns with the job requirements.")
    elif score >= 60:
        explanation.append("The candidate meets most requirements but can improve in some areas.")
    elif score >= 40:
        explanation.append("The profile partially matches but lacks several important skills.")
    else:
        explanation.append("The candidate profile does not sufficiently match the job requirements.")

    # Skills
    explanation.append(f"Matched skills: {', '.join(matched) if matched else 'None'}")

    if missing:
        explanation.append(f"Missing skills: {', '.join(missing)}")
        suggestions.append(f"Consider adding or learning: {', '.join(missing)}")

    # Experience
    exp = resume_data.get("experience", 0)

    if exp < 2:
        explanation.append("Experience level is low.")
        suggestions.append("Work on more projects or internships.")
    elif exp < 5:
        explanation.append("Moderate experience level.")
    else:
        explanation.append("Strong experience level.")

    # Resume quality
    if len(resume_data["keywords"]) < 50:
        suggestions.append("Enhance resume content with more relevant keywords and details.")

    return explanation, suggestions