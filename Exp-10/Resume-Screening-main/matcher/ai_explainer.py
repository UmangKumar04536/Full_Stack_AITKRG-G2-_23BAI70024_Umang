import os
from openai import OpenAI
from dotenv import load_dotenv


load_dotenv()  # loads .env file

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
print("API KEY:", os.getenv("OPENAI_API_KEY"))

def generate_ai_explanation(resume_data, jd_data, score):

    prompt = f"""
You are an AI Resume Reviewer.

Job Description Skills:
{jd_data["required"]}

Candidate Skills:
{resume_data["skills"]}

Experience: {resume_data["experience"]} years

Score: {score}%

Give:
1. Short evaluation
2. Strengths
3. Weaknesses
4. Suggestions for improvement

Keep it concise and professional.
"""

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a helpful career assistant."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.7
    )

    return response.choices[0].message.content