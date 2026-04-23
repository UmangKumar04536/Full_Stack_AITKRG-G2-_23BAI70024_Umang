import json

with open("data/config.json") as f:
    weights = json.load(f)

def calculate_score(resume_data, jd_data):
    resume_skills = set(resume_data["skills"])
    jd_required = set(jd_data["required"])

    # Matches
    required_match = len(resume_skills & jd_required)
    total_required = len(jd_required)

    # Avoid division by zero
    if total_required == 0:
        required_score = 0
    else:
        required_score = required_match / total_required

    # Experience (normalize out of 10 years)
    experience = min(resume_data["experience"], 10) / 10

    # Keyword density (limit)
    keyword_score = min(len(resume_data["keywords"]) / 200, 1)

    # Final normalized score (0–1)
    final_score = (
        required_score * weights["required_weight"] +
        experience * weights["experience_weight"] +
        keyword_score * weights["keyword_weight"]
    )

    # Convert to percentage
    percentage = final_score * 100

    return round(percentage, 2)