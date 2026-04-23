import json

with open("data/skills_taxonomy.json") as f:
    SKILLS_DB = json.load(f)

def extract_keywords(text):
    text = text.lower()
    skills_found = []

    for skill, variations in SKILLS_DB.items():
        for v in variations:
            if v in text:
                skills_found.append(skill)

    return {
        "skills": list(set(skills_found)),
        "experience": extract_experience(text),
        "keywords": text.split()
    }

def extract_experience(text):
    import re
    match = re.findall(r"(\d+)\s+years", text)
    if match:
        return int(match[0])
    return 0