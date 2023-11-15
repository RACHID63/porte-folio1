from bs4 import BeautifulSoup

html_content = """[<!DOCTYPE html>
<html lang="fr">

 # Remplacez ceci par votre code HTML complet
soup = BeautifulSoup(html_content, 'html.parser')

for a_tag in soup.find_all('a', {'data-lightbox': True}):
    full_text = a_tag['data-lightbox']
    words = full_text.split()
    
    if len(words) > 10:
        a_tag['data-lightbox'] = ' '.join(words[:10])
        a_tag['data-title'] = full_text
    else:
        a_tag['data-title'] = full_text

modified_html = soup.prettify()

# Vous pouvez imprimer ou écrire le HTML modifié dans un fichier
print(modified_html)
