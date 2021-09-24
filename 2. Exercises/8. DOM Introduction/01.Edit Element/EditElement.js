function editElement(reference, target, replacer) {
    const content = reference.textContent;
    const matcher = new RegExp(target, 'g');
    const edited = content.replace(matcher, replacer);
    reference.textContent = edited;
}