TAG=$(git rev-parse --short HEAD)
sed -i "s/.*newTag.*/    newTag: ${TAG}/g" k8s/dev/kustomization.yml
kubectl apply -k k8s/dev