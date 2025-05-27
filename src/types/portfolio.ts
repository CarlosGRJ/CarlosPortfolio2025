import { ModalProjectProps } from '@/components/layout/ModalProject/ModalProject';

export type ProjectImage = {
  src: string;
  alt: string;
};

export interface ProjectItem extends ModalProjectProps {
  id: string;
  summary: string;
  coverImg: string;
}
