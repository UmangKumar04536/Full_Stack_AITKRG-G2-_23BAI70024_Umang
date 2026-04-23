import os
from parsers.resume_parser import extract_text_from_file
from parsers.jd_parser import parse_jd
from extractors.keyword_extractor import extract_keywords
from matcher.scorer import calculate_score

def main():
    jd_text = open("input/jd.txt", "r", encoding="utf-8").read()
    jd_data = parse_jd(jd_text)

    results = []

    for file in os.listdir("input/resumes"):
        file_path = f"input/resumes/{file}"

        resume_text = extract_text_from_file(file_path)
        resume_data = extract_keywords(resume_text)

        score = calculate_score(resume_data, jd_data)

        results.append((file, score))

    results.sort(key=lambda x: x[1], reverse=True)

    print("\n📊 Ranking Results:\n")
    for name, score in results:
        print(f"{name} → {score:.2f}")

if __name__ == "__main__":
    main()