from PIL import Image
import os


def convert_image(image_path, image_type):
    im = Image.open(image_path)
    im = im.convert("RGB")
    image_name = image_path.split(".")[0]

    if image_type == "jpg" or image_type == "png":
        im.save(f"converted-{image_name}.webp", "webp")
        print(f"{image_name} concluida")


files = os.listdir()
print(f"These are all of the files in our current working directory: {files}")
images = [file for file in files if file.endswith(("jpg", "png"))]

for image in images:
    print(image)

for image in images:
    print(image)
    if image.endswith("jpg"):
        convert_image(image, image_type="jpg")
    elif image.endswith("png"):
        convert_image(image, image_type="png")
    else:
        raise TypeError("Unsupported image format.")
