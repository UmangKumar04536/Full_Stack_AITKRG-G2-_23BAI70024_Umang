import json

with open("data/skills_taxonomy.json") as f:
    SKILLS_DB = json.load(f)

def parse_jd(text):
    text = text.lower()
    found_skills = []

    for skill, variations in SKILLS_DB.items():
        for v in variations:
            if v in text:
                found_skills.append(skill)

    return {
        "required": list(set(found_skills)),
        "preferred": []
    }