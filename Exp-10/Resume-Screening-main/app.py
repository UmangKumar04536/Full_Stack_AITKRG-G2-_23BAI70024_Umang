import streamlit as st
from parsers.resume_parser import extract_text_from_file
from parsers.jd_parser import parse_jd
from extractors.keyword_extractor import extract_keywords
from matcher.scorer import calculate_score
from matcher.explainer import generate_explanation
# from matcher.ai_explainer import generate_ai_explanation
import matplotlib.pyplot as plt
from matcher.explainer import generate_explanation

def plot_skill_pie(matched_count, missing_count):
    labels = ['Matched Skills', 'Missing Skills']
    sizes = [matched_count, missing_count]

    fig, ax = plt.subplots()
    ax.pie(sizes, labels=labels, autopct='%1.1f%%')
    ax.axis('equal')

    return fig


st.title("📄 AI Resume Screening System")

jd_input = st.text_area("Paste Job Description")

uploaded_files = st.file_uploader(
    "Upload Resumes", accept_multiple_files=True
)

if st.button("Analyze"):
    if not jd_input or not uploaded_files:
        st.warning("Please provide JD and resumes")
    else:
        jd_data = parse_jd(jd_input)
        results = []

        for file in uploaded_files:
            text = file.read().decode("utf-8", errors="ignore")

            resume_data = extract_keywords(text)
            score = calculate_score(resume_data, jd_data)

            results.append((file.name, score, resume_data))

        results.sort(key=lambda x: x[1], reverse=True)

        st.subheader("📊 Results")

        for name, score, resume_data in results:

            st.write(f"### 📄 {name}")
            st.write(f"Score: {score}%")

    # Skill comparison
            resume_skills = set(resume_data["skills"])
            jd_required = set(jd_data["required"])

            matched = resume_skills & jd_required
            missing = jd_required - resume_skills

            matched_count = len(matched)
            missing_count = len(missing)

    # Show pie chart
            if matched_count + missing_count > 0:
                fig = plot_skill_pie(matched_count, missing_count)
                st.pyplot(fig)

    # Explanation + suggestions
            explanation, suggestions = generate_explanation(resume_data, jd_data, score)

            st.write("🔍 **Analysis:**")
            for e in explanation:
                st.write(f"- {e}")

            st.write("💡 **Recommendations:**")
            for s in suggestions:
                st.write(f"- {s}")

            st.write("---")
            
            